import { Injectable } from '@angular/core';
// import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipesChanged = new Subject<Recipe[]>();

	public recipeSelected = new Subject<Recipe>(); 
	// public recipeSelected = new EventEmitter<Recipe>(); 

	// private recipes: Recipe[] = [
	// 	new Recipe(
	// 		'Veggie Friest', 
	// 		'Nothing to see here!', 
	// 		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cookipedia.co.uk%2Fwiki%2Fimages%2F5%2F5e%2FVanilla_slice_recipe_recipe.jpg&f=1&nofb=1',
	// 		[
	// 			new Ingredient('Veggie Meat', 1),
	// 			new Ingredient('French Fries', 25)
	// 		]
	// 	),
	// 	new Recipe('Veggie Burger', 
	// 		'Nothing to see here either!', 
	// 		'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cookipedia.co.uk%2Fwiki%2Fimages%2F5%2F5e%2FVanilla_slice_recipe_recipe.jpg&f=1&nofb=1',
	// 		[
	// 			new Ingredient('Buns', 2),
	// 			new Ingredient('Veggie Meat', 1)
	// 		]
	// 	)
	// ];

	private recipes: Recipe[] = [];

	constructor(private shoppingListService: ShoppingListService) {};

	setRecipes(recipes: Recipe[]) {
		this.recipes = recipes;
		this.recipesChanged.next(this.recipes.slice());
	}

	getRecipes() {
		return this.recipes.slice();
	}
	
	getRecipe(index: number) {
		return this.recipes[index];
	}

	addIngredientToShoppingList(ingredients: Ingredient[]){
		this.shoppingListService.addIngredients(ingredients);
	}

	addRecipe(recipe: Recipe) {
		this.recipes.push(recipe);
		this.recipesChanged.next(this.recipes.slice());
	}

	updateRecipe(index: number, newRecipe: Recipe) {
		this.recipes[index] = newRecipe;
		this.recipesChanged.next(this.recipes.slice());
	}

	deleteRecipe(index: number) {
		this.recipes.splice(index, 1);
		this.recipesChanged.next(this.recipes.slice());
	}

}